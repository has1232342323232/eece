import { useForm } from "react-hook-form";
import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useEffect } from "react";

const ManageNotice = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [selectedImage, setSelectedImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(false);

  const handleImageUpload = () => {
    const formData = new FormData();
    formData.append("image", selectedImage);

    axios
      .post(
        "https://api.imgbb.com/1/upload?key=8643217b4b8b409db6b94484f875159e",
        formData
      )
      .then((response) => {
        setImageUrl(response.data.data.url);
        console.log("Image Url", response.data.data.url);
        toast.success("Image upload Successful");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleImageChange = (event) => {
    setSelectedImage(event.target.files[0]);
  };

  const onSubmit = (data) => {


    const currentDate = new Date();

    const day = String(currentDate.getDate()).padStart(2, "0");
    const month = String(currentDate.getMonth() + 1).padStart(2, "0"); // Adding 1 to month as it is zero-based
    const year = currentDate.getFullYear();

    const formattedDate = `${day}-${month}-${year}`;


    const user_data = {
      date: formattedDate,
      title: data.title,
      imgUrl: imageUrl,
    };

    if (user_data?.imgUrl) {
      fetch("https://eece-server.vercel.app/allNotice", {
        method: "POST",
        body: JSON.stringify(user_data),
        headers: {
          "Content-type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((json) => {
          if (json.acknowledged) {
            toast.success("Image uploded to the server.");
            setImageUrl(false);
            reset();
          }
        });
    }
  };

  const [allNoticeData, setAllNoticeData] = useState([]);

  useEffect(() => {
    fetch("https://eece-server.vercel.app/allNotice")
      .then((res) => res.json())
      .then((data) => {
        console.log("data of all image", data);
        setAllNoticeData(data);
      });
  }, []);

  const handleDelete = (id) => {
    console.log(id);
    if (id) {
      fetch(`https://eece-server.vercel.app/allNotice/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
    }
  };

  return (
    <div>
      <h1 className="text-3xl text-center text-custom-pink p-10">
        Manage Notice Section
      </h1>
      <form
        className="flex items-center justify-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <h1 className="text-center text-xl">Here to Add Image</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Title</span>
              </label>
              <input
                className="input input-bordered"
                {...register("title", { required: true })}
              />
              {errors.title && (
                <span className="text-red-900 text-xs">Title is required</span>
              )}
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Image</span>
              </label>
              <input
                type="file"
                className="input input-bordered"
                {...register("file", { required: true })}
                accept="image/*"
                onChange={handleImageChange}
              />
              {imageUrl ? (
                <></>
              ) : (
                <button
                  className="btn btn-xs btn-outline btn-warning"
                  onClick={handleImageUpload}
                >
                  Click To Upload
                </button>
              )}
              {errors.file && (
                <span className="text-red-900 text-xs">Image is required</span>
              )}
            </div>

            <div className="form-control mt-6">
              <button className="btn btn-primary">ADD IMAGE</button>
            </div>
          </div>
        </div>
      </form>
      <br />
      <div className="divider text-2xl">All Notices</div>
      <br /> <br />
      {allNoticeData ? (
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr>
                <th>No</th>
                <th>Date(dd-mm-yyyy)</th>
                <th>Title</th>
                <th>Image</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {allNoticeData.map((data, index) => (
                <tr>
                  <td>{index + 1}</td>
                  <td>{data?.date}</td>
                  <td>{data.title}</td>
                  <td className="w-2/6 w-1/5">
                    {" "}
                    <img src={data.imgUrl} alt="" />{" "}
                  </td>
                  <td>
                    {" "}
                    <button
                      className="btn btn-xs bg-custom-pink"
                      onClick={() => handleDelete(data._id)}
                    >
                      Delete
                    </button>{" "}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="flex items-center justify-center">
          <span className="loading loading-spinner text-primary"></span>
        </div>
      )}
    </div>
  );
};

export default ManageNotice;

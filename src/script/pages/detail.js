// import Swal from "sweetalert2";
// import { endpoints } from "../services/api.js";
// import controller from "../services/request.js";
// const updatemodal = document.querySelector(".update-modal");
// const updateCahngePassword = document.querySelector("#updatePassword");
// const updateNewPassword = document.querySelector(".update_new_password");
// window.addEventListener("DOMContentLoaded", async function () {
//   const userId = JSON.parse(this.localStorage.getItem("userId"));
//   const apiResponse = await controller.getAll(endpoints.users);
//   const checkUser = apiResponse.data.find((i) => i.id == userId);
//   if (!userId) {
//     window.location.href = "./login.html";
//   }
//   const formcontainerupdate = document.querySelector(".form-container-update");
//   formcontainerupdate.innerHTML = "";
//   formcontainerupdate.innerHTML += `
//    <div class="images-box">
//           <div class="profile-box">
//             <img style="width: 50px; height: 50px;" src="${checkUser.profileImage}" alt="" />
//           </div>
//         </div>
//         <div class="info-box">
//           <h1>Welcome ${checkUser.fullName}</h1>
//           <h2>Edit Profile Form</h2>
//           <div class="register-box max-w-md mt-4">
//             <!-- Login Card -->
//             <div
//               class="login-card bg-white/80 backdrop-blur-lg rounded-2xl shadow-2xl px-8 pb-8 space-y-8 transition-all duration-500 hover:shadow-xl"
//             >
//               <form id="form" class="space-y-4 pt-8">
//                 <div class="flex flex-col md:flex-row gap-4">
//                   <input
//                     id="full-name"
//                     type="text"
//                     placeholder="Full name"
//                     class="w-full md:w-1/2 border border-gray-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-600"
//                     required
//                   />
//                   <input
//                     id="username"
//                     type="text"
//                     placeholder="Username"
//                     class="w-full md:w-1/2 border border-gray-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-600"
//                     required
//                   />
//                 </div>
//                 <input
//                   id="email"
//                   type="email"
//                   placeholder="Email"
//                   class="w-full pl-4 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-600"
//                   required
//                 />
//                 <input
//                   id="bio"
//                   type="text"
//                   placeholder="Bio"
//                   class="w-full pl-4 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-600"
//                   required
//                 />

//                 <button
//                   id="update-password"
//                   class="w-full border text-indigo-800 py-3 rounded-xl hover:opacity-90 transition duration-200 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl mb-4"
//                 >
//                   Update password
//                 </button>
//                 <button
//                   type="submit"
//                   class="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl hover:opacity-90 transition duration-200 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl mb-4"
//                 >
//                   Edit profile
//                 </button>
//               </form>
//             </div>
//           </div>
//           <p class="mt-8">
//             Last log in was made at <span>${checkUser.lastLogin}</span>
//           </p>
//         </div>
//         <form class="modal hidden">
//           <h3>Edit passwords</h3>
//           <input
//             id="current-password"
//             type="password"
//             placeholder="Enter current password"
//             class="w-full pl-4 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-600"
//             required
//           />
//           <input
//             id="new-password"
//             type="password"
//             placeholder="Enter new password"
//             class="w-full pl-4 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-600"
//             required
//           />
//           <input
//             id="confirm-new-password"
//             type="password"
//             placeholder="Confirm new password"
//             class="w-full pl-4 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-600"
//             required
//           />
//           <div class="edit-btns d-flex mt-2">
//             <button
//               type="submit"
//               class="edit-btn bg-indigo-800 text-white py-2 rounded-lg border border-indigo-800 hover:text-blue-900 hover:bg-white transition-colors duration-300"
//             >
//               Edit
//             </button>
//             <button
//               class="cancel-btn text-indigo-800 py-2 rounded-lg border border-indigo-800 hover:bg-indigo-800 hover:text-white transition-colors duration-300"
//             >
//               Cancel
//             </button>
//           </div>
//         </form>
//     `;
//   const fullName = document.querySelector("#full-name");
//   const username = document.querySelector("#username");
//   const email = document.querySelector("#email");
//   const bio = document.querySelector("#bio");
//   const newPassword = document.querySelector("#new-password");
//   const currentPassword = document.querySelector("#current-password");
//   const confirmNewPassword = document.querySelector("#confirm-new-password");
//   const updatePassword = document.querySelector("#update-password");
//   fullName.value = checkUser.fullName;
//   username.value = checkUser.username;
//   email.value = checkUser.email;
//   bio.value = checkUser.bio;
//   updatePassword.addEventListener("click", function () {
//     updatemodal.style.display = "block";
//   });

//   updateNewPassword.addEventListener("click", function () {
//     updateCahngePassword.value = checkUser.password;
//     updatemodal.style.display = "none";
//   });
// });

import Swal from "sweetalert2";
import { endpoints } from "../services/api.js";
import controller from "../services/request.js";

const updatemodal = document.querySelector(".update-modal");
const updateCahngePassword = document.querySelector("#updatePassword");
const updateNewPassword = document.querySelector(".update_new_password");

window.addEventListener("DOMContentLoaded", async function () {
  const userId = JSON.parse(localStorage.getItem("userId"));
  const apiResponse = await controller.getAll(endpoints.users);
  const checkUser = apiResponse.data.find((i) => i.id == userId);

  if (!userId) {
    window.location.href = "./login.html";
    return;
  }

  const formcontainerupdate = document.querySelector(".form-container-update");
  formcontainerupdate.innerHTML = `
   <div class="images-box">
      <div class="profile-box">
        <img style="width: 50px; height: 50px;" src="${checkUser.profileImage}" alt="" />
      </div>
    </div>
    <div class="info-box">
      <h1>Welcome ${checkUser.fullName}</h1>
      <h2>Edit Profile Form</h2>
      <div class="register-box max-w-md mt-4">
        <div class="login-card bg-white/80 backdrop-blur-lg rounded-2xl shadow-2xl px-8 pb-8 space-y-8">
          <form id="form" class="space-y-4 pt-8">
            <div class="flex flex-col md:flex-row gap-4">
              <input id="full-name" type="text" placeholder="Full name" class="w-full md:w-1/2 border rounded-lg p-3" required />
              <input id="username" type="text" placeholder="Username" class="w-full md:w-1/2 border rounded-lg p-3" required />
            </div>
            <input id="email" type="email" placeholder="Email" class="w-full pl-4 pr-4 py-3 rounded-xl border" required />
            <input id="bio" type="text" placeholder="Bio" class="w-full pl-4 pr-4 py-3 rounded-xl border" required />
            <button id="update-password" type="button" class="w-full border text-indigo-800 py-3 rounded-xl">
              Update password
            </button>
            <button type="submit" class="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl">
              Edit profile
            </button>
          </form>
        </div>
      </div>
      <p class="mt-8">Last log in was made at <span>${checkUser.lastLogin}</span></p>
    </div>
    <form class="modal hidden">
      <h3>Edit passwords</h3>
      <input id="current-password" type="password" placeholder="Enter current password" class="w-full pl-4 pr-4 py-3 rounded-xl border" required />
      <input id="new-password" type="password" placeholder="Enter new password" class="w-full pl-4 pr-4 py-3 rounded-xl border" required />
      <input id="confirm-new-password" type="password" placeholder="Confirm new password" class="w-full pl-4 pr-4 py-3 rounded-xl border" required />
      <div class="edit-btns d-flex mt-2">
        <button type="submit" id="save-new-password" class="edit-btn bg-indigo-800 text-white py-2 rounded-lg">Save</button>
        <button type="button" id="cancel-update" class="cancel-btn text-indigo-800 py-2 rounded-lg">Cancel</button>
      </div>
    </form>
  `;

  const fullName = document.querySelector("#full-name");
  const username = document.querySelector("#username");
  const email = document.querySelector("#email");
  const bio = document.querySelector("#bio");
  const newPassword = document.querySelector("#new-password");
  const currentPassword = document.querySelector("#current-password");
  const confirmNewPassword = document.querySelector("#confirm-new-password");
  const updatePassword = document.querySelector("#update-password");
  const saveNewPassword = document.querySelector("#save-new-password");
  const cancelUpdate = document.querySelector("#cancel-update");
  const modal = document.querySelector(".modal");

  fullName.value = checkUser.fullName;
  username.value = checkUser.username;
  email.value = checkUser.email;
  bio.value = checkUser.bio;

  updatePassword.addEventListener("click", function () {
    modal.classList.remove("hidden");
  });

  cancelUpdate.addEventListener("click", function () {
    modal.classList.add("hidden");
  });

  saveNewPassword.addEventListener("click", async function (event) {
    event.preventDefault();

    if (currentPassword.value !== checkUser.password) {
      Swal.fire("Error", "Current password is incorrect!", "error");
      return;
    }

    if (newPassword.value !== confirmNewPassword.value) {
      Swal.fire("Error", "New passwords do not match!", "error");
      return;
    }

    const updatedData = { password: newPassword.value };
    const response = await controller.updateOne(endpoints.users, updatedData, userId);

    if (!response.error) {
      let storedUsers = JSON.parse(localStorage.getItem("users")) || [];
      storedUsers = storedUsers.map((user) => (user.id === userId ? { ...user, ...updatedData } : user));
      localStorage.setItem("users", JSON.stringify(storedUsers));

      Swal.fire("Success", "Password updated successfully!", "success");
      modal.classList.add("hidden");
    } else {
      Swal.fire("Error", "Failed to update password!", "error");
    }
  });
});

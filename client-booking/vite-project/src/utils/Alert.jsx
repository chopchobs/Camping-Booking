import Swal from "sweetalert2";

export const CreateAlert = (icon,text) => {
  return Swal.fire({
    icon: icon || 'info',
    text: text || 'Something Wrong!!!',
    draggable: true,
    timer: 2000,
  });
};

export const CreateNotify =(icon,text) => {
  return Swal.fire({
  position: "top-end",
  icon: icon,
  title: text,
  showConfirmButton: false,
  timer: 1500
});
};



import { Injectable } from "@angular/core";

import Swal, { SweetAlertIcon } from "sweetalert2";

@Injectable({
  providedIn: "root"
})
export class SweetAlertService {
  constructor() {}

  showAlert(message: string, type: SweetAlertIcon, time: number) {
    Swal.fire({
      position: "center",
      icon: type, // warning, error, success, info, question
      title: message,
      showConfirmButton: false,
      timer: time
    });
  }

}

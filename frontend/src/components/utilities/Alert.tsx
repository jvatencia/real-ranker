import Swal from "sweetalert2";

const Alert = {
    confirm: (message: string) => {
        return Swal.fire({
            title: message,
            icon: 'question',
            showConfirmButton: true,
            showDenyButton: true,
            confirmButtonText: 'Confirm',
            denyButtonText: 'Cancel'
        });
    }
}

export default Alert;
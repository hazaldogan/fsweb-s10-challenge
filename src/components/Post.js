import React from "react";
import { formatDistanceToNow } from "date-fns";
import { tr } from "date-fns/locale";
import { useDispatch } from "react-redux";
import { notSilAPI } from "../actions";
import Swal from "sweetalert2";

export default function Post({ item }) {
  const dispatch = useDispatch();
  function handleSil(id) {
    Swal.fire({
      title: "Silmek istediğinizden emin misiniz?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Sil",
      denyButtonText: `Vazgeç`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        dispatch(notSilAPI(id));
        Swal.fire("Notunuz Silindi!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Notunuz silinmedi", "", "info");
      }
    });
  }

  return (
    <div className="beyazKutu p-8 pb-6 mb-4 text-sm">
      <h1>
        {formatDistanceToNow(new Date(item.date), {
          addSuffix: true,
          locale: tr,
        })}
      </h1>

      {item.body.split("|").map((li) => (
        <p className="mt-2" key={li}>
          - {li}
        </p>
      ))}

      <button
        onClick={() => handleSil(item.id)}
        className="text-xs text-amber-600 mt-4 underline"
      >
        Bu notu sil
      </button>
    </div>
  );
}

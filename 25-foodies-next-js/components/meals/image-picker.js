"use client";
import { useRef, useState } from "react";
import classes from "./image-picker.module.css";
import Image from "next/image";
export default function ImagePicker({ label, name }) {
  const inputImageRef = useRef();
  const [pickedImage, setPickedImage] = useState();
  function handleImagePick() {
    inputImageRef.current.click();
  }
  function handleInputImageChange(e) {
    const file = e.target.files[0];
    if (!file) {
      setPickedImage(null);
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      setPickedImage(reader.result);
    };
    reader.readAsDataURL(file);
  }

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>

      <div className={classes.controls}>
        <div className={classes.preview}>
          {!pickedImage && <p>No image picked yet.</p>}
          {pickedImage && (
            <Image
              fill
              alt="The image seleceted by the user"
              src={pickedImage}
            />
          )}
        </div>
        <input
          onChange={handleInputImageChange}
          className={classes.input}
          type="file"
          id={name}
          // accept="/image/png, /image/jpeg"
          name={name}
          ref={inputImageRef}
        />

        <button
          className={classes.button}
          type="button"
          onClick={handleImagePick}
        >
          Pick an image
        </button>
      </div>
    </div>
  );
}

"use client";
import { useRef } from "react";
import classes from "./image-picker.module.css";
export default function ImagePicker({ label, name }) {
  const inputImageRef = useRef();
  function handleImagePick() {
    inputImageRef.current.click();
  }
  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <input
          className={classes.input}
          type="file"
          id={name}
          accept="/image/png, /image/jpeg"
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

import React from "react";
import clsx from "clsx";
import Image from "next/image";
import { Loader2 } from "lucide-react";
import { PrimaryButtonProps } from "./primaryButtons";

const SecondaryButton = ({
  title,
  containerStyles,
  handleClick,
  btnType,
  textStyles,
  Icon,
  isDisabled,
  loading,
}: PrimaryButtonProps) => {
  return (
    <button
      disabled={isDisabled || loading}
      type={btnType || "button"}
      className={clsx(
        {
          "flex justify-center items-center": Icon || loading,
          "custom-btn": !(Icon || loading),
        },
        "relative", // Added to handle potential absolute positioning of children
        "overflow-hidden", // Ensure content stays within rounded borders
        containerStyles // Allow custom styles including width and height
      )}
      onClick={handleClick}
      style={{
        background:
          "linear-gradient(90deg, rgba(238, 176, 86, 0.3) 0%, rgba(238, 176, 86, 0.1) 50%, rgba(238, 176, 86, 0.3) 100%)",
        boxShadow: "0px 4px 8px 0px #000000",
        // borderRadius: '20px',
        border: "0.5px solid #F9DDB5",
        color: "#F6D4A2",
        position: "relative",
        cursor: isDisabled || loading ? "not-allowed" : "pointer",
        outline: "none", // Remove default outline
      }}
    >
      {loading ? (
        <Loader2 className="animate-spin m-1 text-white" /> // Spinner in white
      ) : (
        <span
          className={clsx(
            "text-center",
            "flex items-center justify-center w-full h-full", // Ensure text is centered
            textStyles
          )}
        >
          {title}
        </span>
      )}

      {Icon && !loading && (
        <div className="relative w-6 h-6 ml-2">
          <Image
            src={Icon}
            alt="Icon"
            fill
            className="object-contain"
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </div>
      )}
    </button>
  );
};

export default SecondaryButton;

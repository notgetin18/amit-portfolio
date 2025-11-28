import React, { MouseEventHandler } from "react";
import clsx from "clsx";
import Image from "next/image";
import { Loader2 } from "lucide-react";

export interface PrimaryButtonProps {
  title: string;
  containerStyles?: String;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
  textStyles?: string;
  Icon?: any;
  isDisabled?: boolean;
  loading?: boolean;
  noPadding?: boolean;
  ariaLabel?: string;
}

const PrimaryButtons = ({
  title,
  containerStyles,
  handleClick,
  btnType,
  textStyles,
  Icon,
  isDisabled,
  loading,
}: 
PrimaryButtonProps) => {
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
        borderRadius: "20px",
        border: "0.5px solid #F9DDB5", // Border to match the image
        background: "linear-gradient(90deg, #EEB056 0%, #82540D 100%)", // Gradient background
        boxShadow: "0px 4px 8px 0px #0000004D", // Subtle shadow for depth
        color: "#FFFFFF", // White text to match the image
        position: "relative", // Ensure proper layering
        cursor: isDisabled || loading ? "not-allowed" : "pointer", // Cursor feedback
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

export default PrimaryButtons;

import * as React from "react";
import Image from "next/image";

import styles from "./ProfileButton.module.css";

type ProfileButtonProps = {
    imageSrc?: string;
    alt?: string;
};

function ProfileButton({ imageSrc, alt = "" }: ProfileButtonProps) {
    return (
        <button className={styles.action}>
            <Image
                className={styles.image}
                src={imageSrc || "/image-avatar.jpg"}
                width={40}
                height={40}
                alt={alt}
            />
        </button>
    );
}

export default ProfileButton;

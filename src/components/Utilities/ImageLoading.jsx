import React from 'react';

import styles from './ImageLoading.module.css';

const ImageLoading = ({ alt, ...props }) => {
  const [skeleton, setSkeleton] = React.useState(true);

  function handleLoad({ target }) {
    setSkeleton(false);
    target.style.opacity = 1;
  }


  return (
    <div className={styles.wrapper}>
      {skeleton && <div className={styles.skeleton}></div>}
      <img
        onLoad={handleLoad}
        className={styles.img}
        src=""
        alt={alt}
        {...props}
      />
    </div>
  );
};

export default ImageLoading;

import styled from 'styled-components';

import React from 'react';
import PropTypes from 'prop-types';

function Logo({ className }) {
  return (
    <svg width="183" height="79" viewBox="0 0 183 79" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0)">
        <g filter="url(#filter0_d)">
          <path d="M91.4362 62.6594C91.4362 63.3242 91.1988 63.8945 90.7239 64.3703C90.249 64.8462 89.6799 65.0841 89.0165 65.0841H86.6003V47.6945C86.6003 44.3705 87.5709 42.1032 89.5158 40.8926C91.4571 39.682 93.5661 39.0767 95.8427 39.0767C97.0263 39.0767 98.224 39.3041 99.4321 39.752C100.64 40.2033 101.6 40.8576 102.313 41.7113C103.734 43.5623 104.446 45.938 104.446 48.8351C104.446 51.8267 103.734 54.248 102.313 56.1024C100.892 57.9078 99.0655 58.8106 96.8378 58.8106C95.6541 58.8106 94.6101 58.5971 93.7093 58.1703C92.7595 57.6944 92.0018 56.9596 91.4327 55.9624V62.6594H91.4362ZM99.5403 49.0451C99.5403 47.1941 99.1842 45.7666 98.4754 44.7694C97.7631 43.7722 96.7435 43.2719 95.4202 43.2719C94.1387 43.2719 93.1471 43.7722 92.4348 44.7694C91.7714 45.6721 91.4397 47.0962 91.4397 49.0451C91.4397 50.8505 91.7958 52.2046 92.5046 53.1073C93.2169 54.1045 94.233 54.6049 95.5598 54.6049C96.7924 54.6049 97.7631 54.1045 98.4754 53.1073C99.1877 52.1101 99.5403 50.756 99.5403 49.0451Z" fill="white" />
          <path d="M105.892 33.9438H108.451C109.114 33.9438 109.684 34.1713 110.158 34.6191C110.63 35.0705 110.871 35.6303 110.871 36.2916V58.4467H105.895V33.9438H105.892Z" fill="white" />
          <path d="M124.883 57.6666C123.888 58.1914 122.833 58.5098 121.719 58.6288C120.606 58.7477 119.621 58.8072 118.769 58.8072C117.061 58.8072 115.571 58.3453 114.289 57.4181C113.011 56.4909 112.369 54.9619 112.369 52.8241C112.369 50.8297 112.948 49.4056 114.111 48.5484C115.27 47.6947 116.754 47.1243 118.552 46.8374C118.79 46.8374 119.073 46.8024 119.404 46.729C119.736 46.659 120.117 46.5995 120.543 46.5505C122.627 46.2671 123.671 45.6478 123.671 44.6996C123.671 43.9858 123.305 43.5239 122.568 43.3105C121.831 43.0971 121.157 42.9886 120.543 42.9886C119.879 42.9886 119.286 43.0831 118.765 43.272C118.242 43.461 117.865 43.8179 117.627 44.3392H112.865C113.053 42.8661 113.716 41.6555 114.855 40.7073C116.136 39.6157 117.959 39.0698 120.33 39.0698C122.983 39.0698 124.974 39.5212 126.3 40.4239C127.676 41.3756 128.36 42.7052 128.36 44.4127V50.8962C128.36 52.7961 128.015 54.2796 127.33 55.3503C126.65 56.4209 125.829 57.1907 124.883 57.6666ZM123.745 48.9053C123.081 49.2377 122.156 49.5456 120.972 49.8325L119.338 50.1894C118.486 50.4273 117.868 50.7352 117.491 51.1166C117.159 51.6414 116.995 52.1628 116.995 52.6841C116.995 53.3979 117.208 53.9647 117.634 54.3951C118.06 54.7765 118.675 54.9654 119.481 54.9654C120.808 54.9654 121.852 54.5875 122.61 53.8248C123.367 53.0655 123.748 52.0193 123.748 50.6897V48.9053H123.745Z" fill="white" />
          <path d="M146.297 58.4502H143.808C143.095 58.4502 142.516 58.2263 142.065 57.7749C141.615 57.3236 141.391 56.7428 141.391 56.029V46.3405C141.391 45.1998 141.046 44.3706 140.361 43.8458C139.673 43.3244 138.905 43.062 138.05 43.062C137.198 43.062 136.437 43.3244 135.777 43.8458C135.113 44.3706 134.782 45.1998 134.782 46.3405V58.4502H129.806V47.3377C129.806 44.1082 130.648 41.9494 132.331 40.8542C134.014 39.7625 135.875 39.1677 137.91 39.0732C139.995 39.0732 141.915 39.6191 143.668 40.7107C145.421 41.8024 146.297 44.0137 146.297 47.3342V58.4502Z" fill="white" />
          <path d="M160.959 52.6071H164.513C163.989 54.6014 162.994 56.1235 161.528 57.1661C160.058 58.2578 158.211 58.8036 155.983 58.8036C153.28 58.8036 151.172 57.9254 149.656 56.1689C148.137 54.458 147.38 52.0122 147.38 48.8317C147.38 45.7947 148.113 43.4189 149.583 41.7079C151.098 39.9515 153.207 39.0732 155.91 39.0732C158.752 39.0732 160.959 39.927 162.523 41.6379C164.038 43.3944 164.796 45.8401 164.796 48.9752C164.796 49.1641 164.796 49.3321 164.796 49.4755C164.796 49.619 164.796 49.7134 164.796 49.7589C164.796 49.9969 164.772 50.1613 164.726 50.2558H152.429C152.474 51.7288 152.83 52.8205 153.493 53.5343C154.108 54.2935 155.033 54.6749 156.266 54.6749C157.072 54.6749 157.76 54.5105 158.326 54.1781C158.469 54.1326 158.598 54.0486 158.717 53.9296C158.836 53.8107 158.965 53.6812 159.108 53.5378C159.153 53.3943 159.332 53.2054 159.642 52.9674C159.953 52.726 160.393 52.6071 160.959 52.6071ZM152.429 47.0508H159.681C159.586 45.7702 159.255 44.8185 158.686 44.2027C158.068 43.5379 157.191 43.2055 156.056 43.2055C155.012 43.2055 154.16 43.5379 153.497 44.2027C152.83 44.8674 152.477 45.8192 152.429 47.0508Z" fill="white" />
          <path d="M174 58.4503C172.436 58.5447 170.742 58.5202 168.916 58.3803C167.09 58.2368 166.179 57.0752 166.179 54.8884V33.9438H168.738C169.353 33.9438 169.901 34.1818 170.372 34.6576C170.844 35.1335 171.084 35.7038 171.084 36.3686V39.5736H174V40.5708C174 41.2846 173.763 41.8654 173.288 42.3168C172.813 42.7681 172.244 42.992 171.58 42.992H171.081V53.5343C171.081 54.3425 171.556 54.7449 172.502 54.7449H173.997V58.4503H174Z" fill="white" />
        </g>
        <g filter="url(#filter1_d)">
          <path d="M70.4373 9.79722C73.0735 8.95748 74.5261 6.13386 73.6881 3.49568C72.8501 0.853998 70.0323 -0.601551 67.3996 0.238189C64.7634 1.07793 63.3109 3.90155 64.1489 6.53973C64.9869 9.18142 67.8046 10.6405 70.4373 9.79722Z" fill="#CA5DB2" />
        </g>
        <g filter="url(#filter2_d)">
          <path d="M81.0834 7.01561C82.2915 6.63073 82.9549 5.33963 82.5709 4.12901C82.1868 2.91838 80.8984 2.25359 79.6902 2.63847C78.4821 3.02335 77.8187 4.31445 78.2028 5.52508C78.5869 6.7322 79.8753 7.40049 81.0834 7.01561Z" fill="#CA5DB2" />
        </g>
        <g filter="url(#filter3_d)">
          <path d="M78.0457 50.2075C68.5763 57.1599 58.0105 63.4334 46.9908 68.4299C60.5594 71.6174 74.1979 63.5804 78.0457 50.2075Z" fill="#CA5DB2" />
        </g>
        <g filter="url(#filter4_d)">
          <path d="M104.306 12.5524C100.958 7.13261 85.4759 11.1389 66.2543 20.425C58.22 15.6735 47.9022 15.3971 39.379 20.5999C31.0689 25.6699 26.5891 34.6446 26.8509 43.7383C8.55464 56.6668 -2.86309 68.6435 0.628574 74.2943C5.16075 81.628 32.5074 73.6085 60.6747 56.7052C88.8384 39.8055 108.839 19.8897 104.306 12.5524ZM31.8056 58.2903C29.3091 58.8186 27.6191 58.6961 27.0604 57.7864C26.4808 56.8452 27.1861 55.2112 28.904 53.1433C29.7316 55.1027 30.6988 56.7612 31.8056 58.2903ZM78.9151 40.0539C78.8243 39.2422 78.6986 38.4339 78.531 37.6257C67.5637 46.8558 48.0977 57.9684 35.828 62.7129C36.5927 63.3777 37.3923 63.9865 38.2198 64.5533C25.6254 69.4203 15.6322 70.533 13.1706 66.5477C10.702 62.5519 16.6937 55.2567 27.1687 47.1007C27.3642 48.3218 27.647 49.5395 28.0207 50.7396C21.2608 56.3589 17.5701 60.9389 18.7608 62.8703C22.7448 69.3223 69.1105 43.9202 82.1833 29.7111C85.3118 26.3102 86.8935 23.8084 86.073 22.4789C84.9173 20.6104 79.4319 21.6076 71.6769 24.6972C70.8843 23.8784 70.0463 23.1227 69.1699 22.4264C80.5213 17.7238 89.2539 16.2333 91.5689 19.9771C93.9607 23.8574 88.6394 31.625 78.9151 40.0539ZM73.4576 26.7405C75.6679 26.3731 77.1623 26.5656 77.6825 27.4088C78.1993 28.2451 77.6895 29.6061 76.3522 31.3276C75.5561 29.7216 74.6169 28.2171 73.4576 26.7405Z" fill="#CA5DB2" />
        </g>
        <g filter="url(#filter5_d)">
          <path d="M149.162 66.2913C149.456 65.7463 149.858 65.3191 150.368 65.0196C150.877 64.7201 151.451 64.5679 152.088 64.5679C152.695 64.5679 153.234 64.7054 153.69 64.9754C154.146 65.2455 154.489 65.5794 154.699 65.9771V64.6857H155.885V75.1149H154.699V70.4551C154.474 70.8529 154.131 71.1868 153.67 71.4617C153.205 71.7367 152.666 71.8742 152.048 71.8742C151.431 71.8742 150.867 71.7171 150.363 71.4077C149.858 71.0984 149.456 70.6614 149.167 70.1016C148.873 69.5419 148.731 68.9035 148.731 68.1916C148.721 67.4747 148.868 66.8413 149.162 66.2913ZM154.376 66.8167C154.16 66.419 153.871 66.1195 153.509 65.9083C153.141 65.6972 152.744 65.5941 152.303 65.5941C151.862 65.5941 151.465 65.6972 151.108 65.9034C150.745 66.1097 150.461 66.4092 150.245 66.8069C150.03 67.2046 149.922 67.6662 149.922 68.2014C149.922 68.7415 150.03 69.2129 150.245 69.6155C150.461 70.0132 150.75 70.3226 151.108 70.5337C151.47 70.7448 151.867 70.848 152.303 70.848C152.739 70.848 153.141 70.7448 153.509 70.5337C153.876 70.3226 154.165 70.0181 154.376 69.6155C154.591 69.2129 154.699 68.7464 154.699 68.2161C154.699 67.676 154.591 67.2144 154.376 66.8167Z" fill="#CA5DB2" />
          <path d="M164.127 64.6851V71.7606H162.956V70.7147C162.73 71.0781 162.422 71.3579 162.02 71.5593C161.623 71.7606 161.182 71.8637 160.702 71.8637C160.153 71.8637 159.658 71.7508 159.222 71.52C158.786 71.2941 158.438 70.9504 158.183 70.4938C157.928 70.0371 157.801 69.4823 157.801 68.8292V64.6851H158.962V68.6721C158.962 69.3693 159.139 69.9045 159.491 70.2777C159.844 70.6509 160.324 70.8375 160.932 70.8375C161.559 70.8375 162.054 70.646 162.412 70.2581C162.774 69.8702 162.951 69.3055 162.951 68.569V64.6851H164.127V64.6851Z" fill="#CA5DB2" />
          <path d="M166.15 63.3055C165.994 63.1484 165.92 62.9618 165.92 62.7359C165.92 62.51 165.999 62.3234 166.15 62.1663C166.302 62.0092 166.493 61.9355 166.719 61.9355C166.934 61.9355 167.116 62.0141 167.268 62.1663C167.42 62.3185 167.493 62.51 167.493 62.7359C167.493 62.9618 167.42 63.1484 167.268 63.3055C167.116 63.4626 166.934 63.5363 166.719 63.5363C166.493 63.5363 166.307 63.4577 166.15 63.3055ZM167.287 64.6852V71.7607H166.116V64.6852H167.287Z" fill="#CA5DB2" />
          <path d="M170.159 70.7933H173.623V71.7606H168.816V70.7933L172.241 65.6425H168.841V64.6851H173.593V65.6425L170.159 70.7933Z" fill="#CA5DB2" />
        </g>
      </g>
      <defs>
        <filter id="filter0_d" x="82.6003" y="33.9438" width="95.3997" height="39.1403" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
        </filter>
        <filter id="filter1_d" x="59.9117" y="0.000488281" width="18.0136" height="18.0358" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
        </filter>
        <filter id="filter2_d" x="74.0939" y="2.5293" width="12.5859" height="12.5952" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
        </filter>
        <filter id="filter3_d" x="42.9908" y="50.2075" width="39.0548" height="26.9191" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
        </filter>
        <filter id="filter4_d" x="-3.99826" y="10.106" width="112.946" height="74.9112" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
        </filter>
        <filter id="filter5_d" x="144.731" y="61.9355" width="32.8923" height="21.1793" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
        </filter>
        <clipPath id="clip0">
          <rect width="183" height="79" fill="white" />
        </clipPath>
      </defs>
    </svg>

  );
}

Logo.propTypes = {
  className: PropTypes.string.isRequired,
};

const QuizLogo = styled(Logo)`
  margin: auto;
  display: block;
  @media screen and (max-width: 500px) {
    margin: 0;
  }
`;

export default QuizLogo;
import * as React from "react"
import Svg, { Defs, Path, G, Use } from "react-native-svg"
const SvgComponent1 = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width={135.82}
        height={39.436}
        viewBox="-0.239 -0.227 101.865 29.577"
        {...props}
    >
        <Defs>
            <Path
                id="e"
                d="M4.663 3.486c0-.043 0-.072-.244-.315C2.984 1.72 2.18-.646 2.18-3.572c0-2.783.674-5.18 2.338-6.872.144-.13.144-.158.144-.2 0-.087-.072-.116-.13-.116-.186 0-1.362 1.033-2.065 2.44-.732 1.448-1.062 2.983-1.062 4.748 0 1.277.2 2.984.947 4.519C3.199 2.668 4.376 3.6 4.533 3.6c.058 0 .13-.029.13-.115Z"
            />
            <Path
                id="j"
                d="M4.046-3.572c0-1.09-.144-2.87-.947-4.534-.847-1.721-2.023-2.654-2.18-2.654-.058 0-.13.029-.13.115 0 .043 0 .072.244.316C2.468-8.88 3.27-6.513 3.27-3.587c0 2.784-.674 5.18-2.338 6.872-.144.13-.144.158-.144.201 0 .086.072.115.13.115.186 0 1.362-1.033 2.065-2.439.732-1.463 1.062-3.013 1.062-4.734Z"
            />
            <Path
                id="b"
                d="M9.684-4.648c.2 0 .459 0 .459-.258 0-.273-.244-.273-.46-.273h-8.45c-.2 0-.458 0-.458.258 0 .273.244.273.459.273h8.45Zm0 2.668c.2 0 .459 0 .459-.258 0-.273-.244-.273-.46-.273h-8.45c-.2 0-.458 0-.458.259 0 .272.244.272.459.272h8.45Z"
            />
            <Path
                id="i"
                d="M2.89-3.507c.816-.269 1.394-.966 1.394-1.753 0-.817-.877-1.375-1.833-1.375-1.006 0-1.764.598-1.764 1.355 0 .329.22.518.509.518.308 0 .508-.22.508-.508 0-.498-.469-.498-.618-.498.309-.489.966-.618 1.325-.618.408 0 .956.22.956 1.116 0 .12-.02.697-.279 1.136-.298.478-.637.508-.886.518-.08.01-.32.03-.389.03-.08.01-.15.02-.15.119 0 .11.07.11.24.11h.438c.817 0 1.186.677 1.186 1.653C3.527-.349 2.839-.06 2.4-.06c-.428 0-1.176-.17-1.524-.757.348.05.657-.17.657-.548 0-.359-.269-.558-.558-.558-.239 0-.558.14-.558.578 0 .907.927 1.564 2.013 1.564 1.215 0 2.122-.906 2.122-1.923 0-.817-.628-1.594-1.664-1.803Z"
            />
            <Path
                id="a"
                d="M.445 2.482c-.015.072-.043.158-.043.244 0 .215.172.358.387.358s.416-.143.502-.344c.058-.129.46-1.85.918-3.615.287.717.818 1.018 1.378 1.018 1.62 0 3.457-2.008 3.457-4.174 0-1.535-.933-2.296-1.922-2.296-1.263 0-2.798 1.306-3.271 3.214L.445 2.482ZM3.572-.143c-.975 0-1.22-1.134-1.22-1.306 0-.086.36-1.449.402-1.664.732-2.855 2.138-2.927 2.353-2.927.646 0 1.004.588 1.004 1.435 0 .732-.387 2.152-.63 2.754C5.05-.86 4.303-.143 3.571-.143Z"
            />
            <Path
                id="h"
                d="M6.155-10.229c0-.014.086-.23.086-.258a.27.27 0 0 0-.259-.273c-.071 0-.2 0-.315.316L.86 3.056c0 .014-.086.23-.086.258a.27.27 0 0 0 .258.273c.086 0 .215-.015.316-.316l4.806-13.5Z"
            />
            <Path
                id="d"
                d="M8.88-8.206c.488-.775.933-1.119 1.664-1.176.144-.015.259-.015.259-.273 0-.057-.029-.143-.158-.143-.258 0-.875.028-1.133.028-.417 0-.847-.028-1.249-.028-.114 0-.258 0-.258.272 0 .13.13.144.187.144.53.043.588.3.588.473 0 .215-.201.545-.215.56L4.06-1.205 3.056-8.938c0-.416.746-.444.904-.444.215 0 .344 0 .344-.273 0-.143-.158-.143-.201-.143-.244 0-.53.028-.775.028h-.803c-1.047 0-1.478-.028-1.492-.028-.086 0-.258 0-.258.258 0 .158.1.158.33.158.731 0 .774.129.817.487L3.07-.043c.043.301.043.344.244.344.172 0 .244-.043.387-.272l5.18-8.235Z"
            />
            <Path
                id="g"
                d="M4.849-1.822c-.057.23-.086.287-.273.502-.588.76-1.19 1.033-1.635 1.033-.473 0-.918-.373-.918-1.363 0-.76.43-2.367.746-3.013.416-.803 1.061-1.377 1.664-1.377.947 0 1.133 1.177 1.133 1.263l-.043.2-.674 2.755Zm.89-3.558c-.187-.416-.589-.947-1.306-.947-1.564 0-3.343 1.966-3.343 4.103C1.09-.732 1.994 0 2.912 0c.76 0 1.435-.603 1.693-.89L4.29.403c-.201.789-.287 1.147-.804 1.65-.588.588-1.133.588-1.449.588-.43 0-.789-.029-1.148-.144a.76.76 0 0 0 .574-.688c0-.23-.172-.46-.487-.46a.738.738 0 0 0-.718.76c0 .59.588.819 1.808.819 1.85 0 2.812-1.191 2.998-1.966l1.593-6.427c.043-.172.043-.2.043-.23 0-.2-.158-.358-.373-.358-.345 0-.545.287-.589.674Z"
            />
            <Path
                id="f"
                d="M4.031-9.598c.015-.057.043-.143.043-.215 0-.143-.143-.143-.172-.143-.014 0-.53.043-.789.071-.244.015-.459.044-.717.058-.344.029-.445.043-.445.301 0 .144.144.144.287.144.732 0 .732.129.732.272 0 .058 0 .086-.072.344L.846-.56C.79-.344.79-.316.79-.23c0 .316.244.373.387.373.402 0 .488-.315.603-.76L2.453-3.3c1.033.115 1.65.546 1.65 1.234 0 .086 0 .144-.043.359-.057.215-.057.387-.057.459 0 .832.545 1.391 1.276 1.391.66 0 1.005-.602 1.12-.803.3-.53.487-1.334.487-1.392 0-.071-.057-.129-.143-.129-.13 0-.144.058-.201.287-.201.746-.502 1.75-1.234 1.75-.287 0-.473-.143-.473-.688 0-.273.057-.588.114-.803.058-.259.058-.273.058-.445 0-.847-.76-1.32-2.08-1.492.516-.316 1.033-.875 1.233-1.09.818-.919 1.378-1.378 2.038-1.378.33 0 .416.086.516.172-.53.058-.732.43-.732.718 0 .344.273.459.474.459.387 0 .731-.33.731-.79 0-.415-.33-.846-.975-.846-.79 0-1.435.56-2.453 1.708-.144.172-.675.717-1.205.918L4.03-9.598Z"
            />
            <Path
                id="c"
                d="M2.955-4.203c.029-.087.388-.804.918-1.263.373-.344.861-.574 1.42-.574.575 0 .775.43.775 1.004 0 .087 0 .373-.172 1.048l-.358 1.477c-.115.43-.388 1.492-.416 1.65a6.458 6.458 0 0 0-.144.646c0 .2.158.358.373.358.43 0 .502-.33.631-.846l.861-3.429c.029-.114.775-1.908 2.353-1.908.574 0 .775.43.775 1.004 0 .804-.56 2.368-.876 3.228-.129.345-.2.531-.2.79 0 .645.444 1.161 1.133 1.161 1.334 0 1.836-2.108 1.836-2.195 0-.071-.057-.129-.143-.129-.13 0-.144.043-.215.287-.33 1.148-.861 1.75-1.435 1.75-.143 0-.373-.014-.373-.473 0-.373.172-.832.23-.99.258-.688.903-2.381.903-3.213 0-.861-.502-1.507-1.592-1.507-.961 0-1.736.545-2.31 1.392-.043-.775-.516-1.392-1.592-1.392-1.277 0-1.951.904-2.21 1.263-.043-.818-.63-1.263-1.262-1.263-.416 0-.746.201-1.019.746-.258.517-.459 1.392-.459 1.45s.058.128.158.128c.115 0 .13-.014.215-.344.216-.846.488-1.693 1.062-1.693.33 0 .445.23.445.66 0 .316-.144.875-.244 1.32L1.62-2.51c-.057.272-.215.918-.287 1.176-.1.373-.258 1.047-.258 1.119 0 .2.158.358.373.358a.55.55 0 0 0 .488-.3c.028-.073.158-.575.23-.862l.315-1.29.473-1.894Z"
            />
        </Defs>
        <G transform="matrix(1.13 0 0 1.13 -63.986 -60.85)">
            <Use xlinkHref="#a" x={56.413} y={69.68} />
            <Use xlinkHref="#b" x={67.644} y={69.68} />
            <Use xlinkHref="#c" x={83.75} y={59.975} />
            <Path d="M83.75 65.807h12.287v.574H83.75z" />
            <Use xlinkHref="#d" x={84.238} y={79.521} />
            <Use xlinkHref="#e" x={97.232} y={69.68} />
            <Use xlinkHref="#f" x={102.695} y={69.68} />
            <Use xlinkHref="#g" x={110.482} y={69.68} />
            <Use xlinkHref="#h" x={117.724} y={69.68} />
            <Use xlinkHref="#c" x={124.747} y={69.68} />
            <Use xlinkHref="#i" x={137.034} y={63.757} />
            <Use xlinkHref="#j" x={142.514} y={69.68} />
        </G>
    </Svg>
)
export default SvgComponent1
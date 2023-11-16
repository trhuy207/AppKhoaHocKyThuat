import * as React from "react"
import Svg, { Defs, Path, G, Use } from "react-native-svg"
const SvgComponent2 = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width={24.597}
        height={15.649}
        viewBox="-0.239 -0.235 18.448 11.737"
        {...props}
    >
        <Defs>
            <Path
                id="b"
                d="M2.884-5.767h1.32c.272 0 .415 0 .415-.258 0-.158-.086-.158-.373-.158H2.984l.53-2.095c.058-.2.058-.23.058-.33 0-.23-.186-.358-.373-.358-.115 0-.445.043-.56.502l-.559 2.28H.732c-.287 0-.416 0-.416.273 0 .144.1.144.373.144h1.276L1.02-1.98c-.115.502-.158.646-.158.832 0 .675.473 1.291 1.277 1.291C3.587.143 4.36-1.95 4.36-2.052c0-.086-.057-.129-.143-.129-.029 0-.086 0-.115.058-.014.014-.029.028-.13.258-.3.717-.96 1.722-1.792 1.722-.43 0-.46-.36-.46-.675 0-.014 0-.287.044-.459l1.119-4.49Z"
            />
            <Path
                id="a"
                d="M6.183-9.985c-.1-.2-.129-.258-.33-.258-.215 0-.244.057-.344.258L.717-.287A.407.407 0 0 0 .66-.1c0 .086.014.1.301.1h9.77c.287 0 .301-.014.301-.1a.407.407 0 0 0-.057-.187L6.183-9.985ZM5.41-8.923 9.325-.99H1.506L5.41-8.923Z"
            />
        </Defs>
        <G transform="matrix(1.13 0 0 1.13 -63.986 -62.962)">
            <Use xlinkHref="#a" x={56.413} y={65.753} />
            <Use xlinkHref="#b" x={68.119} y={65.753} />
        </G>
    </Svg>
)
export default SvgComponent2

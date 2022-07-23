import { PropsWithChildren } from "react";

declare module "react-input-mask" {
    class ReactInputMask extends React.Component<PropsWithChildren> {}
	export default ReactInputMask;
}

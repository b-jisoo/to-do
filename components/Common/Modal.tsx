import { IModalProps } from "./types";
import ModalView from "./view/ModalView";

const ModalBase = ({ children, visible, onClose }: IModalProps) => {
  if (!visible) {
    return null;
  }
  const ModalProps: IModalProps = {
    children,
    visible,
    onClose,
  };

  return <ModalView {...ModalProps} />;
};

export default ModalBase;

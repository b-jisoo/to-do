import { IChildrenProps } from "@/types/children";
import { ReactNode } from "react";

export interface ICheckbox {
  id: string;
  title: string;
  contents: string;
}

export type IModalProps = {
  /** 모달에 들어갈 컴포넌트 */
  children?: ReactNode;
  /** 모달에 아레쪽에 들어갈 컴포넌트 */
  footer?: ReactNode;
  /** 모달 창 생성 여부를 컨트롤할 변수 */
  visible: boolean;
  /** 닫기 버튼 혹은 백그라운드 클릭 시 실행할 함수 */
  onClose: () => void;
};

import { ReactNode } from "react";
import { Icon } from '@iconify/react';


interface ModalProps {
  handleClose: VoidFunction;
  show: boolean;
  children: ReactNode;
}

function Modal({handleClose = () => {}, show = false, children}: ModalProps) {
  return show
    ? <div className="fixed left-0 top-0 w-screen h-screen max-w-screen max-h-screen flex justify-center items-center bg-slate-500/75" onClick={handleClose}>
        <div className="relative w-10/12 h-10/12 max-h-full shadow-lg bg-white z-10 rounded-md overflow-y-auto" onClick={e => e.stopPropagation()}>
          <div className="absolute right-2 top-2 flex justify-end">
            <Icon icon="gridicons:cross" className="cursor-pointer w-8 h-8" onClick={handleClose} />
          </div>
          {children}
        </div>
      </div>
    : <></>
}

export default Modal
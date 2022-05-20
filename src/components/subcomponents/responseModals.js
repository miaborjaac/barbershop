import { Modal } from 'antd';
import store from '../../store/store';

export function SUCCESS_MODAL(message) {
  Modal.success({
    title: "Acción realizada correctamente",
    content: message,
    keyboard: false,
    maskClosable: false,
  });
}

export function SUCCESS_MODAL_ON_OK(message, onOkFunction) {
  Modal.success({
    title: "Acción realizada correctamente",
    content: message,
    keyboard: false,
    maskClosable: false,
    onOk () {
      store.dispatch(onOkFunction)
    }
  });
}
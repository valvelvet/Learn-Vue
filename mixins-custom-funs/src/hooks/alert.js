import { ref } from "vue";

export default function useAlert(isVisible = false) {
  const alertIsVisible = ref(isVisible);

  function showAlert() {
    alertIsVisible.value = true;
  }

  function hideAlert() {
    alertIsVisible.value = false;
  }

  return { alertIsVisible, showAlert, hideAlert };
}

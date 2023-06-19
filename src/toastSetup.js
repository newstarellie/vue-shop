import { useToast } from "vue-toastification";

export const toastSetup = () => {
  // 獲取 toast 接口
  const toast = useToast();

  // 使用它！
  toast("I'm a toast!");

  // 或者使用選項
  toast.success("My toast content", {
    timeout: 2000
  });

  // 在方法內部使用 toast
  const myMethod = () => {
    0
    toast.info("I'm an info toast!");
  };

  // 返回需要在模板或其他方法中使用的數據和方法
  return {
    myMethod,
    toast
  };
};

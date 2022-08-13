declare module "*.elm" {
  export const Elm: ElmInstance<{
    some: PortToElm<string>;
  }>;
}

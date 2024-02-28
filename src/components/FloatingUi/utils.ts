import { computePosition, flip, offset, shift } from "@floating-ui/react";
import { Placement } from "@floating-ui/react";
// interface IGetFloatingTargetElementLayout {
//   place?: Placement;
//   baseElement: any;
//   targetElement: any;
// }
export function getFloatingTargetElementLayout(
  place: any,
  baseElement: any,
  targetElement: any
) {
  // const arrowElement = document.querySelector('#arrow');
  function update() {
    computePosition(baseElement, targetElement, {
      placement: "left",
      middleware: [offset(6), flip(), shift({ padding: 5 })],
    }).then(({ x, y, middlewareData, placement }) => {
      Object.assign(targetElement.style, {
        left: `${x}px`,
        top: `${y}px`,
      });
    });
  }
  function showtargetElement() {
    targetElement.style.display = "block";
    update();
  }
  function hidetargetElement() {
    targetElement.style.display = "none";
  }
  [
    ["mouseenter", showtargetElement],
    ["mouseleave", hidetargetElement],
    ["focus", showtargetElement],
    ["blur", hidetargetElement],
    ["click", showtargetElement],
  ].forEach(([event, listener]: any) => {
    baseElement.addEventListener(event, listener);
  });
}

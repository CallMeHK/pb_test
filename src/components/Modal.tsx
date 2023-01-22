export const Modal = ({
  children,
  close,
}: {
  children: any;
  close: () => void;
}) => (
  <dialog open>
    <article>
      <a
        href="#close"
        aria-label="Close"
        className="close"
        data-target="modal-example"
        onClick={close}
      ></a>
      {children}
    </article>
  </dialog>
);

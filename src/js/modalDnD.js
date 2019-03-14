export function modalDnD(target) {
    target.onmousedown = e => {
        let {left, top} = target.getBoundingClientRect();
        let offsetLeft = e.pageX - left;
        let offsetTop = e.pageY - top;

        function move(e) {
            target.style.left = `${e.pageX - offsetLeft}px`;
            target.style.top = `${e.pageY - offsetTop}px`;
        }

        document.onmousemove = e => {
            move(e);
        };

        target.onmouseup = () => {
            target.onmouseup = null;
            document.onmousemove = null;
        };
    };
}
function Section({ title, children, ...props }) {
    return (
        // 감싸진 요소에 속성 전달하기 ...props
        <section {...props}>
            <h2>{title}</h2>
            {children}
        </section>
    );
}

export default Section;
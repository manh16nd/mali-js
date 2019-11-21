const createElement = element => {
    const {
        type,
        props: elementProps,
        config
    } = element

    const defaultProps = {
        title: '',
        children: '',
    }

    const props = { ...defaultProps, ...elementProps } || { ...defaultProps }


}

export default createElement
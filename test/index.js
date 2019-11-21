import Mali from '../index'

const element = Mali.createElement({
    type: 'h1',
    props: {
        children: 'abc'
    }
})

Mali.render(element, document.getElementById('root'))
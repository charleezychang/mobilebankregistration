const useDebounce = (cb) => {
    let timeout
    return (...args) => {
        clearTimeout(timeout)
        timeout = setTimeout(() => {
            cb(...args)
        }, 1000)
    }

}

export default useDebounce
//
const comp = (...fns)=>{
    return ctx=>{
        let idx = 0
        const next = ()=>{
            if(idx >= fns.length) return ctx

            return fns[idx++](ctx, next)
        }
        next()
        return ctx
    }
}

export {comp as compose}

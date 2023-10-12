import { programsStore } from '/components/programs-section/store/programs.store.js'
import programsJson from '/src/data/programs.json'
export const setProgramSelected = (program) => {
    const store = programsStore()
    store.setProgramSelected(program)
}
export const getProgramSelected = () => {
    const store = programsStore()
    return store.getProgramSelected
}
export const getPrograms = () => {
    return programsJson
}

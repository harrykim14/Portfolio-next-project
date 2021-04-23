import { useReducer, useContext, createContext, Dispatch } from 'react';

type Language = 'kor' | 'eng' | 'jpn';

type State = {
    language :Language
}

type Action = { type : 'SET_LANGUAGE', language: Language }

type Dispatcher = Dispatch<Action>;

const StateContext = createContext<State>({language: 'kor'});
const DispatchContext = createContext<Dispatcher>(() => null);

const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case 'SET_LANGUAGE':
            return {
                ...state,
                language: action.language
            };
        default:
            throw new Error('Unhandled Action');
    }
}

export const StateProvider: React.FC = ({ children }: { children: React.ReactNode }) => {
    const [state, dispatch] = useReducer(reducer, {
        language: 'kor',
    });

    return (
        <StateContext.Provider value={state}>
            <DispatchContext.Provider value={dispatch}>
            {children}
            </DispatchContext.Provider>
        </StateContext.Provider>
    )
}

export const useCustomState = (): State => {
    const state = useContext(StateContext);
    if (!state) throw new Error('Cannot find SampleProvider'); // 유효하지 않을땐 에러를 발생
    return state;
  }
  
  export const useCustomDispatch = () => {
    const dispatch = useContext(DispatchContext);
    if (!dispatch) throw new Error('Cannot find SampleProvider'); // 유효하지 않을땐 에러를 발생
    return dispatch;
  }
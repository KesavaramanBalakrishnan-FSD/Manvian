import { createContext, useCallback, useReducer } from "react";

// Create Context
const AxoContext = createContext();

// Type
const type = {
  BLOG: "BLOG",
  PORTFOLIO_MODAL: "PORTFOLIO_MODAL",
};
const { BLOG, COLOR, PORTFOLIO_MODAL } = type;

// Initial Value
const initialState = {
  blog: null,
  blogs: [
    {
      id: 1,
      date: "23 Oct 2022",
      img: "/assets/images/blog/1.png",
      title: "User interface design or user interface engineering",
      catagory: "UI/UX Design",
    },
    {
      id: 2,
      date: "13 Dec 2022",
      img: "/assets/images/blog/2.png",
      title: "Web design encompasses many different skills",
      catagory: "Web Design",
    },
    {
      id: 3,
      date: "23 Dec 2022",
      img: "/assets/images/blog/3.png",
      title: "Jim Morisson Says when the musics over turn off the light",
      catagory: "Web Development",
    },
  ],
  portfolio_modal: false,
};

// Reducer
const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case BLOG:
      return {
        ...state,
        blog: payload,
      };
    case PORTFOLIO_MODAL:
      return {
        ...state,
        portfolio_modal: payload,
      };
    default:
      return state;
  }
};

// Watson State
const AxoState = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const blogDetails = useCallback((value) => {
    dispatch({
      type: BLOG,
      payload: value,
    });
  }, []);

  const portfolio_modal_show = useCallback((value) => {
    dispatch({
      type: PORTFOLIO_MODAL,
      payload: value,
    });
  }, []);

  const { color, blog, blogs, portfolio_modal } = state;
  return (
    <AxoContext.Provider
      value={{
        blogs,
        blog,
        blogDetails,
        portfolio_modal,
        portfolio_modal_show,
      }}
    >
      {children}
    </AxoContext.Provider>
  );
};

export default AxoState;
export { AxoContext };

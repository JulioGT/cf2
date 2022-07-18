const initState = {
    blockSelectedLoading: true
  };
  
  const getBlockDetailsReducer = (state = initState, action) => {
    switch (action.type) {
      case 'BLOCK_ERROR':
        return {
          ...state,
          ...action.blockSelected,
          blockSelectedLoading: false
        };
      case 'BLOCK_SUCCESS':
        console.log('success');
        return {
          ...state,
          ...action.blockSelected,
          blockSelectedLoading: false
        };
      case 'BLOCK_LOADING':
        return {
          ...state,
          blockSelectedLoading: true
        };
      default:
        return {
          ...state,
          ...action.blockSelected,
          blockSelectedLoading: true
        };
    }
  };
  
  export default getBlockDetailsReducer;
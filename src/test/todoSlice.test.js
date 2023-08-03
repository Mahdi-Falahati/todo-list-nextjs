import { AddTodo, AddComplete, todoSlice } from '../store/TodoSlice';

describe('TodoSlice', () => {
  const initialState = {
    arrayData: [],
    completeTodo: [],
    unCompeleteTodo: [],
  };

  it('should handle AddTodo', () => {
    const newState = todoSlice.reducer(initialState, AddTodo({ id: 1, title: 'Test Todo' }));

    expect(newState.arrayData).toHaveLength(1);
    expect(newState.arrayData[0].id).toBe(1);
    expect(newState.unCompeleteTodo).toHaveLength(1);
    expect(newState.unCompeleteTodo[0].title).toBe('Test Todo');
  });

  it('should handle AddComplete', () => {
    const state = {
      arrayData: [{ id: 1, title: 'Test Todo', complete: false }],
      completeTodo: [],
      unCompeleteTodo: [{ id: 1, title: 'Test Todo', complete: false }],
    };

    const newState = todoSlice.reducer(state, AddComplete(1));

    expect(newState.arrayData[0].complete).toBe(true);
    expect(newState.unCompeleteTodo).toHaveLength(0);
    expect(newState.completeTodo).toHaveLength(1);
    expect(newState.completeTodo[0].title).toBe('Test Todo');
  });
});
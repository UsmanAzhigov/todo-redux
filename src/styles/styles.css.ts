import { style } from '@vanilla-extract/css';
export const body = style({
  boxSizing: 'border-box',
  position: 'absolute',
  width: 500,
  height: 500,
  left: 102,
  top: 111,
  background: '#ffffff',
  borderRadius: 6,
  boxShadow: '0px 9px 24px rgba(0, 0, 0, 0.01), 0px 25px 40px rgba(0, 0, 0, 0.05)',
});
export const header = style({
  width: 484,
  height: 73,
  background: '#db4c3f',
  fontFamily: 'Roboto',
  borderRadius: 5,
  fontSize: 15,
  paddingLeft: 20,
  justifyContent: 'center',
});
export const inputStyle = style({
  width: 380,
  height: 50,
  marginTop: 75,
  border: 0,
  fontSize: 20,
});
export const headerTitle = style({
  position: 'absolute',
});

export const title = style({
  fontFamily: 'Roboto',
  marginTop: 80,
  marginLeft: 20,
});
export const btnAdd = style({
  position: 'absolute',
  marginTop: 13,
  width: 57,
  height: 53,
  left: 405,
  top: 63,
  fontSize: 30,
  color: '#c7c7c7',
  background: '#fbfbfb',
  border: 0,
  cursor: 'pointer',
});
export const allClear = style({
  marginTop: 200,
  height: 40,
  width: 130,
  borderRadius: 10,
  marginLeft: 20,
  cursor: 'pointer',
  border: 0,
});
export const task = style({
  position: 'absolute',
  maxHeight: 50,
  fontFamily: 'Roboto',
  marginLeft: 20,
  fontSize: 25,
  listStyleType: 'none',
});
export const btnDelete = style({
  fontSize: 20,
  borderRadius: 10,
  cursor: 'pointer',
  background: '#fbfbfb',
  marginLeft: 20,
});

import data from '../../src/data.json';
const reducer = (
	state = {
		members: [],
		isAuth: false,
		isAdmin: false,
		loggedMember: '',
		updatingMember: {
			name: '',
			base: '',
			phone: '',
			email: '',
			pic: '',
			disc: '',
		},
		selectedMember: {
			name: '',
			base: '',
			phone: '',
			email: '',
			pic: '',
			disc: '',
		},
		isAdding: false,
		isUpdating: false,
	},
	action
) => {
	if (action.type === 'MEMBERS_FETCHED') {
		return { ...state, members: action.payload };
	}
	if (action.type === 'ADD') {
		return { ...state, members: [...state.members, action.payload] };
	}
	if (action.type === 'DELETE') {
		const newMembers = state.members.filter(
			member => member !== action.payload
		);
		return { ...state, members: newMembers };
	}
	if (action.type === 'MEMBER_LOGIN') {
		return {
			...state,
			isAdmin: false,
			isAuth: true,
			isAdding: false,
			isUpdating: false,
			loggedMember: action.payload,
		};
	}
	if (action.type === 'ADMIN_LOGIN') {
		return {
			...state,
			isAdmin: true,
			isAuth: true,
			isAdding: false,
			isUpdating: false,
			loggedMember: action.payload,
		};
	}
	if (action.type === 'OPEN_REGISTER_FORM') {
		return {
			...state,
			isAdding: true,
			isUpdating: false,
			updatingMember: { name: '', id: '', base: '', phone: '', email: '' },
		};
	}
	if (action.type === 'OPEN_UPDATE_FORM') {
		return {
			...state,
			isUpdating: true,
			isAdding: false,
			updatingMember: action.payload,
		};
	}
	if (action.type === 'CLOSE_FORM') {
		return {
			...state,
			isAdding: false,
			isUpdating: false,
			updatingMember: { name: '', id: '', base: '', phone: '', email: '' },
		};
	}
	if (action.type === 'MEMBER_SELECTED') {
		return {
			...state,
			selectedMember: action.payload,
		};
	}
	if (action.type === 'LOGOUT') {
		return { ...state, isAuth: false, isAdmin: false };
	}
	return state;
};
export default reducer;

const positionNamesEnglish = {
	ASSISTANT_DIRECTOR: 'Assistant Director',
	ASSISTANT_PROGRAMMER: 'Assistant Programmer',
	ASSISTANT_MAINTENANCE_ENGINEER: 'Assistant Maintenance Engineer',
	AO_PS: 'Administrative Officer/ Personal Secretary',
	DEPUTY_ASSISTANT_DIRECTOR: 'Deputy Assistant Director',
	DATA_ENTRY_CONTROL_SUPERVISOR: 'Data Entry Control Supervisor',
	OFFICE_ASSISTANT_CUM_COMPUTER_OPERATOR: 'Office Assistant Cum Computer Operator',
	ASSISTANT_STORE_KEEPER: 'Assistant Store Keeper',
	DATA_ENTRY_OPERATOR: 'Data Entry Operator',
	SCANNING_AND_EQUIPMENT_MAINTENANCE_OPERATOR: 'Scanning and Equipment Maintenance Operator',
	PACKING_SUPERVISOR: 'Packing Supervisor',
	QUALITY_ASSURANCE_INCHARGE: 'Quality Assurance Incharge',
	QUALITY_ASSURANCE_OPERATOR: 'Quality Assurance Operator',
	MACHINE_SUPERVISOR: 'Machine Supervisor',
	MACHINE_OPERATOR: 'Machine Operator',
	SCANNING_OPERATOR: 'Scanning Operator',
	OFFICE_ASSISTANT: 'Office Assistant',
	DESPASS_OPERATOR: 'Despass Operator',
	COUNTER: 'Counter',
	DRIVER: 'Driver',
	ELECTRICIAN: 'Electrician'
};

const positionNamesBengali = {
	ASSISTANT_DIRECTOR: 'সহকারী পরিচালক',
	ASSISTANT_PROGRAMMER: 'সহকারী প্রোগ্রামার',
	ASSISTANT_MAINTENANCE_ENGINEER: 'অ্যাসিস্টেন্ট মেইনটেন্যান্স ইঞ্জিনিয়ার',
	AO_PS: 'প্রশাসনিক কর্মকর্তা/ব্যক্তিগত সহকারী',
	DEPUTY_ASSISTANT_DIRECTOR: 'উপ সহকারী পরিচালক',
	DATA_ENTRY_CONTROL_SUPERVISOR: 'ডাটা এন্ট্রি কন্ট্রোল সুপারভাইজার',
	OFFICE_ASSISTANT_CUM_COMPUTER_OPERATOR: 'অফিস সহকারী কাম কম্পিউটার অপারেটর',
	ASSISTANT_STORE_KEEPER: 'সহকারী স্টোর কিপার',
	DATA_ENTRY_OPERATOR: 'ডাটা এন্ট্রি অপারেটর',
	SCANNING_AND_EQUIPMENT_MAINTENANCE_OPERATOR: 'স্ক্যানিং এবং ইকুইপমেন্ট মেইনটেন্যান্স অপারেটর',
	PACKING_SUPERVISOR: 'প্যাকিং সুপারভাইজার',
	QUALITY_ASSURANCE_INCHARGE: 'কোয়ালিটি অ্যাসুরেন্স ইনচার্জ',
	QUALITY_ASSURANCE_OPERATOR: 'কোয়ালিটি অ্যাসুরেন্স অপারেটর',
	MACHINE_SUPERVISOR: 'মেশিন সুপারভাইজার',
	MACHINE_OPERATOR: 'মেশিন অপারেটর',
	SCANNING_OPERATOR: 'স্ক্যানিং অপারেটর',
	OFFICE_ASSISTANT: 'অফিস সহকারী',
	DESPASS_OPERATOR: 'ডেসপ্যাস অপারেটর',
	COUNTER: 'কাউন্টার',
	DRIVER: 'ড্রাইভার',
	ELECTRICIAN: 'ইলেকট্রিশিয়ান'
};

export const generateDropdown = (language: 'en' | 'bn'): { value: string; name: string }[] => {
	const positionNames = language === 'en' ? positionNamesEnglish : positionNamesBengali;

	return Object.keys(positionNames).map((key) => ({
		value: key,
		name: positionNames[key]
	}));
};

// // Usage for English dropdown
// const englishDropdown = `<select>${generateDropdown('en')}</select>`;

// // Usage for Bengali dropdown
// const bengaliDropdown = `<select>${generateDropdown('bn')}</select>`;

// console.log(englishDropdown);
// console.log(bengaliDropdown);

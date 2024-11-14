import { TStringUtilJoinString } from 'src/types';

export const joinString = ({ path = '', strings = [], options }: TStringUtilJoinString) => {
    let responseString: string = '';

    responseString = strings.join(path);

    return responseString;
};

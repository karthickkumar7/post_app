import React from 'react';

type Props = {
    classname: string;
};

const UserAvatar = ({ classname }: Props) => {
    return (
        <div
            className={`rounded-full bg-blue-400 cursor-pointer ${classname}`}
        ></div>
    );
};

export default UserAvatar;

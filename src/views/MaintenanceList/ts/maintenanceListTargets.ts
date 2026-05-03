export type MaintenanceListTargets ={
    targets:{
        title:string,
        description:string,
        imagePath:string,
        routeName:string,
    }[],
}

const maintenanceListTargets:MaintenanceListTargets={
    targets:[
        {
            title: '标题',
            description: '描述',
            imagePath: '图像路径',
            routeName: 'maintenanceTarget_test'
        },
        {
            title: '标题2',
            description: '描述2',
            imagePath: '图像路径2',
            routeName: 'maintenanceTarget_test2',
        },
        {
            title: '标题3',
            description: '描述3',
            imagePath: '图像路径3',
            routeName: 'maintenanceTarget_test3',
        },
        {
            title: '标题4',
            description: '描述4',
            imagePath: '图像路径4',
            routeName: 'maintenanceTarget_test4',
        },
        {
            title: '标题5',
            description: '描述5',
            imagePath: '图像路径5',
            routeName: 'maintenanceTarget_test5',
        },
        {
            title: '标题6',
            description: '描述6',
            imagePath: '图像路径6',
            routeName: 'maintenanceTarget_test6',
        }
    ]
}

export default maintenanceListTargets;
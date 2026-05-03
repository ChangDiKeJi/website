export default [
    {
        path: '/maintenance',
        name: 'maintenanceTargetView',
        component: ()=>import('@/views/maintenanceTargetView/maintenanceTargetView.vue'),
        children:[
            {
                path: '',
                component: ()=>import('@/views/maintenanceTargetView/maintenanceTargetView.vue'),
            },
            {
                path: 'test',
                name: 'maintenanceTarget_test',
                component: ()=>import('@/views/maintenanceTargetView/maintenanceTargetView.vue'),
                meta:{
                    markdownRelativePath: 'test.md',
                },
            },
            {
                path: 'test2',
                name: 'maintenanceTarget_test2',
                component: ()=>import('@/views/maintenanceTargetView/maintenanceTargetView.vue'),
                meta:{
                    markdownRelativePath: 'test2.md',
                },
            },
            {
                path: 'test3',
                name: 'maintenanceTarget_test3',
                component: ()=>import('@/views/maintenanceTargetView/maintenanceTargetView.vue'),
                meta:{
                    markdownRelativePath: 'test3.md',
                },
            },
            {
                path: 'test4',
                name: 'maintenanceTarget_test4',
                component: ()=>import('@/views/maintenanceTargetView/maintenanceTargetView.vue'),
                meta:{
                    markdownRelativePath: 'test4.md',
                },
            },
            {
                path: 'test5',
                name: 'maintenanceTarget_test5',
                component: ()=>import('@/views/maintenanceTargetView/maintenanceTargetView.vue'),
                meta:{
                    markdownRelativePath: 'test5.md',
                },
            },
            {
                path: 'test6',
                name: 'maintenanceTarget_test6',
                component: ()=>import('@/views/maintenanceTargetView/maintenanceTargetView.vue'),
                meta:{
                    markdownRelativePath: 'test6.md',
                },
            }
        ],
    }
]
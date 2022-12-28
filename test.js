const arr = [1,5,3,2,4];
const sorted  = arr.sort((a,b)=>a-b)
sorted[0] = null;
// console.log(arr[0]);
const  members = ["John Doe", "Sam Smith", "Allie Cartel"];

function addNewMember(newUser,callBack) {
  setTimeout(function () {
    members.push(newUser);
    console.log("Member Added");
    callBack();
  }, 200);
}

function getAllMembers() {
  setTimeout(function () {
    console.log("Members are:");
    console.log(members);
  }, 100);
}

// addNewMember("Alpha", getAllMembers);

// creating Promise object
// var myPromise = new Promise(function(resolve, reject) {
//     const number1 = 2;
//     const number2 = 2;
//     // comparing two numbers
//     if(number1 === number2) {
//       // Operation successful
//       resolve('great');
//     } else {
//       // Error occurred
//       reject('did not requl');
//     }
// });

// myPromise.then((res)=>{
//     console.log('yeah',res);
// }).catch((err)=>{
//     console.log(err);
// })

const menuData = 
	{
		child: [
			{
				label: 'Home',
				iconPath: '1',
				prefix:"🔥",
				suffix:"🔥",
				pageUrl:'/home'
			},
			{
				label: 'Users List',
				iconPath: '2',
				suffix:"🔥",
				pageUrl:'/user-list'
			},
			{
				label: 'All Servies',
				iconPath: '3',
				pageUrl:'/all-services',
				child: [
					{
						label: 'Add Categories',
						iconPath: '4',
						prefix:"🔥",
						suffix:"🔥",
						pageUrl:'/all-services/add-categories',
						child: [
							{
								label: 'Inner child',
								iconPath: '5',
								suffix:"🔥",
								child: [
									{
										label: 'Inner child 2',
										iconPath: '6',
										suffix:"🔥",
										child: [
											{
												label: 'Inner child 3',
												iconPath: '7',
												suffix:"🔥"
											},
										],
									},
								],
							},
						],
					},
					{
						label: 'Add Service',
						iconPath: '56',
						prefix:"🔥",
						suffix:"🔥",
						pageUrl:'/all-services/add-service',
						child: [
							{
								label: 'Inner child',
								iconPath: '10',
								suffix:"🔥"
							},
						],
					},
				],
			},
			{
				label: 'Profile 2',
				iconPath: '34',
			},
		],
	};

    const recusiveFunction = (items)=> {
        // console.log(items);
        if(items?.child){
          return items.child.map((el)=>{
                return  recusiveFunction(el)
              })
        }
        else {
            return items
        }
       
    //    console.log(recusiveFunction(items))
    }

// menuData?.child?.map((items,idx)=>{
// 		// console.log(items);
//         if(!items?.child) {
//             // console.log('ami handle kortesi');
//         }
//         else {
//             // console.log('onek child ase! ami parbona! karon ami jani na koyta child ase!');
//             // console.log(items)
//            const retValue = recusiveFunction(items);
//            console.log('ami',retValue);
//         }
// 	});

 
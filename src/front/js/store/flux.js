const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			pisos: [],
			message: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getMessage: async () => {
				try {
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				} catch (error) {
					console.log("Error loading message from backend", error)
				}
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			getPisos: async () => {
				try {
					const resp = await fetch(process.env.BACKEND_URL + "/api/piso")
					const data = await resp.json()
					setStore({ pisos: data })
					// don't forget to return something, that is how the async resolves
					return data;
				} catch (error) {
					console.log("Error loading message from backend", error)
				}
			},
			newPiso: async (piso) => {
				try {

					const resp = await fetch(process.env.BACKEND_URL + "/api/piso", {
						method: "POST", // *GET, POST, PUT, DELETE, etc.
						mode: "cors", // no-cors, *cors, same-origin
						//cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
						//credentials: "same-origin", // include, *same-origin, omit
						headers: {
							"Content-Type": "application/json",
							// 'Content-Type': 'application/x-www-form-urlencoded',
						},
						//redirect: "follow", // manual, *follow, error
						//referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
						body: JSON.stringify(piso) // body data type must match "Content-Type" header
					})
					const data = await resp.json();

					console.log(data);

				} catch (error) {
					console.log(error)
				}
			}
		}
	};
};

export default getState;

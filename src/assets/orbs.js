const orbs = [
    {
        name: "Light",
        id: 0,
        style: {
            color: "#fffff5",
            textColor: "#63b85c",
        },
        action: {
            forward: [
                {
                    attack: 0,
                    self: 2,
                    time: 6,
                },
            ],
            backward: [
                {
                    attack: 0,
                    self: 2,
                    time: -6,
                },
            ],
        },
        binary: 0b000,
    },
    {
        name: "Lake",
        id: 1,
        style: {
            color: "#ffc4d3",
            textColor: "#aab0b5",
        },
        action: {
            forward: [
                {
                    attack: 0,
                    self: 0,
                    time: 0,
                },
            ],
            backward: [
                {
                    attack: 0,
                    self: 0,
                    time: 0,
                },
            ],
        },
        binary: 0b001,
    },
    {
        name: "Fire",
        id: 2,
        style: {
            color: "#ff4714",
            textColor: "#2f3a70",
        },
        action: {
            forward: [
                {
                    attack: 3,
                    self: -2,
                    time: 5,
                },
            ],
            backward: [
                {
                    attack: 2,
                    self: -3,
                    time: 0,
                },
            ],
        },
        binary: 0b010,
    },
    {
        name: "Thunder",
        id: 3,
        style: {
            color: "yellow",
            textColor: "#72cfd4",
        },
        action: {
            forward: [
                {
                    attack: 2,
                    self: 0,
                    time: 3,
                },
            ],
            backward: [
                {
                    attack: 1,
                    self: 0,
                    time: -3,
                },
            ],
        },
        binary: 0b011,
    },
    {
        name: "Wind",
        id: 4,
        style: {
            color: "#ebfeff",
            textColor: "#ffc4d3",
        },
        action: {
            forward: [
                {
                    attack: 1,
                    self: 1,
                    time: 4,
                },
            ],
            backward: [
                {
                    attack: 1,
                    self: 1,
                    time: -4,
                },
            ],
        },
        binary: 0b100,
    },
    {
        name: "Water",
        id: 5,
        style: {
            color: "#120040",
            textColor: "white",
        },
        action: {
            forward: [
                {
                    attack: 0,
                    self: 1,
                    time: 3,
                },
            ],
            backward: [
                {
                    attack: 0,
                    self: 1,
                    time: -3,
                },
            ],
        },
        binary: 0b101,
    },
    {
        name: "Mountain",
        id: 6,
        style: {
            color: "#aab0b5",
            textColor: "#fffff5",
        },
        action: {
            forward: [
                {
                    attack: 0,
                    self: 0,
                    time: 10,
                },
            ],
            backward: [
                {
                    attack: 0,
                    self: 0,
                    time: -10,
                },
            ],
        },
        binary: 0b110,
    },
    {
        name: "Earth",
        id: 7,
        style: {
            color: "#75d17a",
            textColor: "#ff4714",
        },
        action: {
            forward: [
                {
                    attack: -3,
                    self: 3,
                    time: 4,
                },
            ],
            backward: [
                {
                    attack: 3,
                    self: -3,
                    time: -4,
                },
            ],
        },
        binary: 0b111,
    },
];

export default orbs;

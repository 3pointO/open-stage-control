nmPorts = {
    'MonitorsDag':'SCSon:6675',
    'MonitorsJeannot':'SCSon:6676',
    'MonitorsORL':'SCSon:6677',
    'Mains':'SCSon:6678',
}

TABS = [
    {
        id:'MonitorsJeannot',
        widgets: [

            {
			    id:'Drums',
			    range:'db',
			    target:nmPorts['MonitorsJeannot'],
			    path:'/strip/Drums/Gain/Gain%20(dB)/unscaled'
		    },

            {
			    id:'Basses',
			    range:'db',
			    target:nmPorts['MonitorsJeannot'],
			    path:'/strip/Basses/Gain/Gain%20(dB)/unscaled'
		    },

            {
			    id:'Guitars',
			    range:'db',
			    target:nmPorts['MonitorsJeannot'],
			    path:'/strip/Guitars/Gain/Gain%20(dB)/unscaled'
		    },

            {
			    id:'MxDrums',
			    range:'db',
			    target:nmPorts['MonitorsJeannot'],
			    path:'/strip/MxDrums/Gain/Gain%20(dB)/unscaled'
		    },

            {
			    id:'MxSynths',
			    range:'db',
			    target:nmPorts['MonitorsJeannot'],
			    path:'/strip/MxSynths/Gain/Gain%20(dB)/unscaled'
		    },

            {
			    id:'Vocals',
			    range:'db',
			    target:nmPorts['MonitorsJeannot'],
			    path:'/strip/Vocals/Gain/Gain%20(dB)/unscaled'
		    },

            {
			    id:'Metronome',
			    range:'db',
			    target:nmPorts['MonitorsJeannot'],
			    path:'/strip/Metronome/Gain/Gain%20(dB)/unscaled'
            },

            {
			    id:'MonitorsJeannot',
			    range:'db',
			    target:nmPorts['Mains'],
			    path:'/strip/MonitorsJeannot/Gain/Gain%20(dB)/unscaled',
			    color:'accent'
            }
        ]
    }
]

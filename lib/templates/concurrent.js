var program = 'program object replacement'

var workerIndex;

onmessage = function(e) {
	var data = e.data;
	switch(data.cmd) {
		case 'init':
			workerIndex = data.workerIndex;
			break;

		case 'job':
			if (data.type === 'map') {
				var results = program.map(data.data);

				postMessage({
					cmd: 'results',
					results: results,
					worker: workerIndex
				});
			}
			break;
	}
};
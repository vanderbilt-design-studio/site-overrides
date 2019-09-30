import { h } from 'preact';
import ultimaker from '../assets/ultimaker-3-1@3x.png';

const formatState = print_job => {
    switch (print_job.state) {
        case 'wait_cleanup':
            const time_elapsed = Date.parse(
                '01 Jan 1970 ' + print_job.time_elapsed + ' GMT'
            );
            const time_total = Date.parse(
                '01 Jan 1970 ' + print_job.time_total + ' GMT'
            );
            if (time_elapsed < time_total) {
                return 'print aborted';
            }
            return 'print complete';
        case 'pre_print':
            return 'preparing to print';
        default:
            return print_job.state;
    }
};

const formatStatus = (printer, print_job) => {
    if (printer === undefined) {
        return 'unknown';
    }

    switch (printer.status) {
        case 'printing':
            if (print_job && print_job.state !== 'printing') {
                return formatState(print_job);
            }
        default:
            return printer.status;
    }
};

export default ({ printerData }) => (
    <div class="printer-status">
        {printerData &&
            [...printerData]
                .sort((a, b) => a.system.name.localeCompare(b.system.name))
                .map(({ system, printer, print_job, camera }) => (
                    <div class="tile">
                        <div class="detail">
                            <h2 class="name">{system.name}</h2>
                            <p class="status">
                                {formatStatus(printer, print_job)}
                            </p>
                            {print_job && print_job.time_total != '0:00:00' && (
                                <div class="time">
                                    <span>{print_job.time_elapsed}</span>/
                                    <span>{print_job.time_total}</span>
                                </div>
                            )}
                            {camera && (
                                <div class="camera">
                                    <a href={'#' + system.name + '-lightbox'} class="preview">
                                        <img
                                            src={camera.snapshot}
                                            alt="Livestream of the printer camera feed"
                                        />
                                    </a>
                                    <a
                                        href="#_"
                                        class="lightbox"
                                        id={system.name + '-lightbox'}
                                    >
                                        <img
                                            src={camera.snapshot}
                                            alt="Livestream in a lightbox for clicking"
                                        />
                                    </a>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
    </div>
);

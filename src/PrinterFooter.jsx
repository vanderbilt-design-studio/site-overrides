import { h } from 'preact';
import ultimaker from '../assets/ultimaker-3-1@3x.png';

export default ({ printerData }) => (
    <div class="printer-status">
        {printerData && [...printerData].sort((a, b) => {
            if (a.system.name > b.system.name) {
                return 1;
            } else if (a.system.name < b.system.name) {
                return -1;
            }
            return 0;
        }).map(({ system, printer, print_job }) => (<div class="tile">
            <img class="printer" src={ultimaker} draggable={false} />
            <div class="detail">
                <h2 class="name">{system.name}</h2>
                <h3 class="status">{printer.status + ((print_job && print_job.state !== 'printing' && (': ' + print_job.state)) || '')}</h3>
                {print_job &&
                    <div class="time">
                        <span>{print_job.time_elapsed}</span> out of <span>{print_job.time_total}</span>
                    </div>
                }
            </div>
        </div>
        ))}
    </div>
);

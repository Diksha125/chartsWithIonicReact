import { CartesianGrid, Line, LineChart, ReferenceLine, ResponsiveContainer, XAxis } from "recharts";
import { calculateBiorythmSeries } from "../lib/biorythms";
import PropTypes from 'prop-types';

function BiorhythymChart({ birthDate, targetDate }) {
    const series = calculateBiorythmSeries(birthDate, targetDate, 15);

    return (
        <ResponsiveContainer width="100%" height={200}>
            <LineChart data={series}>
                <CartesianGrid vertical={false} strokeDasharray="2, 6" />
                <XAxis dataKey="date" ticks={[series[1].date, series[15].date, series[30].date]} />
                <ReferenceLine x={series[15].date} />
                <Line type="natural" dataKey="physical" stroke="red" dot={false} />
                <Line type="natural" dataKey="emotional" stroke="green" dot={false} />
                <Line type="natural" dataKey="intellectual" stroke="blue" dot={false} />
            </LineChart>
        </ResponsiveContainer>
    );
}

BiorhythymChart.propTypes = {
    birthDate: PropTypes.string.isRequired,
    targetDate: PropTypes.string.isRequired,
};

export default BiorhythymChart;

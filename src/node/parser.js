import fs from 'fs';

const departmentLUT = {
    ING : ["INSO", "ICOM", "INEL", "INQU", "ININ", "INCI", "INME",],
    ARCI : ["BIOL", "CIMA", "CISO", "ECON", "ENFA", "ESPA", "FISI", "GEOL", "HUMA", "INGL", "EDFI", "MATE", "PSIC", "QUIM", "BIND"],
    CIAG : ["CIAN", "CIAGRO", "ECAG", "INAG"],
    ADEM : ["CONT", "FINA", "SICI", "GERE", "MERC", "GERH", "ADOF"],
    Multidisciplinario : []
};

function parseActivities(filename) {
    const activityConfigs = [];
    const data = fs.readFileSync(filename, 'utf8')

    const lines = data.split('\n');
       
    // First 2 lines can be ignored
    lines.shift();
    lines.shift();

    lines.forEach((line) => {
        const fields = line.split(',');

        const id = parseInt(fields[0]);
        const name = fields[1];
        const initials = fields[2];
        const tags = fields[3].split(';').filter(e => !(e.match(/\s/) || !e));
        const orgEmail = fields[4];
        const councillorEmail = fields[6];
        const presidentEmail = fields[7];
        const requirementYear = parseInt(fields[8]);

        let departmentStartIndex = 0;
        let departmentEndIndex = 18;

        if (fields[5] != "Multidisciplinario") {
            departmentStartIndex = fields[5].indexOf('(') + 1;
            departmentEndIndex = fields[5].indexOf(')');
        }

        const department = fields[5].slice(departmentStartIndex, departmentEndIndex);
        const requirementCourses = departmentLUT[department];
        
        const config = {
            id,
            name,
            initials,
            tags,
            orgEmail,
            councillorEmail,
            presidentEmail,
            requirementYear,
            requirementCourses
        };

        activityConfigs.push(config);
    });

    return activityConfigs;
}

export default parseActivities

